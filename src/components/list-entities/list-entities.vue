<template>
  <div class="wrapper-list-entities-vue"> <!-- classe que encapsula todos os componentes de list-entities-vue -->
    <div class="wrapper-list-entities"> <!-- classe que encapsula o componente list-entities -->
      <div class="row">
        <div class="col-xs-12 col-md-12">
          <vuestic-widget
            :hidePrimary="hideSearch"
            :compactSecundary="isCompact"
            :headerText="isCompact && titleTable || titleSearch"
          >
            <div v-if="$slots.headerText" slot="headerText"> <!-- se o usuário passar o primeiro título em forma de slot -->
              <slot name="headerText"></slot> <!-- exibe o slot responsável por exibir o primeiro título -->
            </div> <!-- end v-if -->

            <div class="row">
              <div :class="{ 'col-md-2': optionsSearch && optionsSearch.length }"> <!-- select de atributos a serem buscados -->
								<div class="form-group form-group-select">
									<!-- <label class="before-select">Pesquisar: </label> -->
									<b-form-select
										v-if="optionsSearch && optionsSearch.length"
										v-model="attrSearch"
										:options="optionsSearch"
									/> <!-- select dos tributos a serem filtrados -->
								</div> <!-- end class form-group -->
              </div> <!-- end col -->

							<div v-if="optionsSearch && optionsSearch.length && searchOperatorsShow && operators && operators.length" class="col-md-2">

								<!-- select com as operações a serem usadas para filtrar a busca -->

								<div class="form-group form-group-select">
									<!-- <label class="before-select">Operador: </label> -->
									<b-form-select
										v-model="searchOperator"
										:options="operators"
									/> <!-- select de operações -->
								</div> <!-- end class form-group -->
							</div> <!-- end col -->

              <div :class="{
								'col-md-12': !(optionsSearch && optionsSearch.length),
								'col-md-10': !(searchOperatorsShow && operators && operators.length),
								'col-md-8': searchOperatorsShow && operators && operators.length
							}"> <!-- campo de pesquisa -->
                <div class="form-group">
                  <div class="input-group d-flex">
										<div class="flex-1">
											<input
												id="txtsearch"
												name="search"
												v-model="inputSearch"
												@keypress="keyHandler($event)"
												ref="txtSearch"
											/> <!-- campo de pesquisa -->
											<label class="control-label" for="txtsearch">Buscar:</label>
											<i class="bar"></i>
										</div>
										<button
											@click.prevent.stop="search(true)"
											class="btn btn-success option search"
										>Buscar</button>
                  </div> <!-- end class input-group -->
                </div> <!-- end class form-group -->
              </div> <!-- end col -->
            </div> <!-- end class row -->

						<div slot="secundary">
							<!--
								slot usado para passar um html a ser exibido abaixo deste widget se 'isCompact'
								for igual a false ou dentro deste widget se 'isCompact' for true
							-->

							<div :class="{'row': !isCompact}">
								<div :class="{'col-xs-12 col-md-12': !isCompact}">
									<component :is="componentShowTable" :headerText="titleTable">
										<slot name="beforeTable"></slot> <!-- slot chamado antes de mostrar a tabela de resultados -->

										<div class="table-responsive">
											<table class="table table-striped first-td-padding">
												<thead>
													<tr>
														<td v-if="$scopedSlots.check">{{tdCheckName}}</td>
														<td
															:class="{'pointer': !descriptorEntity[attr.value] || !descriptorEntity[attr.value].disableSort}"
															v-show="!descriptorEntity[attr.value] || !descriptorEntity[attr.value].hidden"
															@click="(!descriptorEntity[attr.value] || !descriptorEntity[attr.value].disableSort) && onClickHeader(attr.value)"
															v-for="attr of definitions.displayAttrs" :key="attr.value"
														> <!-- td atributos -->
															<span v-show="definitions.sort && definitions.sort[0] !== '-' && (definitions.sort == attr.value || definitions.sort.substring(1) == attr.value) && (!descriptorEntity[attr.value] || !descriptorEntity[attr.value].disableSort)" class="fas fa-angle-down"></span>
															<span v-show="definitions.sort && definitions.sort[0] === '-' && (definitions.sort == attr.value || definitions.sort.substring(1) == attr.value) && (!descriptorEntity[attr.value] || !descriptorEntity[attr.value].disableSort)" class="fas fa-angle-up"></span>
															{{attr.display}}:
														</td> <!-- end v-for td atributos -->

														<td
															v-if="!hideLastAttr && lastAttr"
															:class="{'pointer': !descriptorEntity[lastAttr.value] || !descriptorEntity[lastAttr.value].disableSort}"
															@click="(!descriptorEntity[lastAttr.value] || !descriptorEntity[lastAttr.value].disableSort) && onClickHeader(lastAttr.value)"
														> <!-- td lastAttr -->
															<span v-show="definitions.sort && definitions.sort[0] !== '-' && (definitions.sort == lastAttr.value || definitions.sort.substring(1) == lastAttr.value) && (!descriptorEntity[lastAttr.value] || !descriptorEntity[lastAttr.value].disableSort)" class="fas fa-angle-down"></span>
															<span v-show="definitions.sort && definitions.sort[0] === '-' && (definitions.sort == lastAttr.value || definitions.sort.substring(1) == lastAttr.value) && (!descriptorEntity[lastAttr.value] || !descriptorEntity[lastAttr.value].disableSort)" class="fas fa-angle-up"></span>
															{{lastAttr.display}}:
														</td> <!-- end td lastAttr -->

														<td v-for="opt of Object.keys(options)" :key="opt">{{ options[opt] || '' }}</td> <!-- headers das opções a serem exibidas após os atributos -->
														<td class="text-center" v-if="optionShow && ($scopedSlots.td_option || optionRemove || optionEdit || optionReport || optionView)">{{ tdOptionName }}</td> <!-- nome do header a aparecer acima das opções padrão na tabela -->
													</tr> <!-- end tr -->
												</thead> <!-- end thead -->

												<tbody>
													<slot name="tblpre"></slot> <!-- slot a ser chamado antes da exibição do conteúdo da tabela e depois do header -->

													<tr v-for="(entity, index) of entities" :key="entity[idAttrName]" :class="[...classLine, entity.__classLine]"
														@click="$emit('on_click', entity, index)"
													> <!-- percorre cada entidade transmitida pelo v-model -->
														<td v-if="$scopedSlots.check"> <!-- se o usuário passou o slot contendo o conteúdo a ser apresentao como primeiro 'td' de uma linha da abela -->
															<slot name="check" :entity="entity" :index="index"></slot> <!-- slot contendo o conteúdo a ser apresentao como primeiro 'td' de uma linha da abela -->
														</td> <!-- end td slot check -->

														<slot name="entity_line" :entity="entity" :index="index"> <!-- slot slot do conteúdo da linha da tabela -->
															<td
																v-for="attr of definitions.displayAttrs" :key="attr.value"
																v-show="!descriptorEntity[attr.value] || !descriptorEntity[attr.value].hidden"
															> <!-- percorre os atributos que sempre serão exibidos -->
																<slot :name="`${attr.value}_slot`" :entity="entity" :index="index">
																	{{ entity | getValue(attr) | parseAttr(attr, descriptorEntity, joinSep) }}
																</slot>
															</td> <!-- end v-for displayAttrs -->

															<td v-if="!hideLastAttr">
																<slot :name="`${lastAttr.value}_slot`" :entity="entity" :index="index">
																	{{ entity.__lastAttrValue | parseAttr(lastAttr, descriptorEntity, joinSep) }}
																</slot>
															</td>
														</slot> <!-- end slot 'entity_line' -->

														<td v-for="opt of Object.keys(options)" :key="opt"> <!-- opções a serem exibidas ao final da linha depois de exibir os atributos e antes de exibir as opções padrão -->
															<slot :name="opt" :entity="entity" :index="index"></slot>
														</td> <!-- end v-for options -->

														<slot v-if="optionShow" name="td_option" :entity="entity" :index="index"> <!-- slot as opções padrão a serem exibidas ao final de cada linha -->
															<td class="text-center" v-if="$scopedSlots.td_option || optionRemove || optionEdit || optionReport || optionView"> <!-- td com as ações padrão a serem realizadas em uma entidade -->
																<slot name="optionView" :entity="entity" :index="index"> <!-- slot da opção de visualização da entidade em um modal -->
																	<button v-if="optionView" type="button" class="btn btn-warning option option-icon" @click.prevent.stop="entityView(entity, index)">
																		<span class="far fa-eye"></span>
																	</button>
																</slot> <!-- end slot optionView -->

																<slot name="optionRemove" :entity="entity" :index="index"> <!-- slot da opção de remoção da entidade -->
																	<button v-if="optionRemove" type="button" class="btn btn-danger option option-icon" @click.prevent.stop="remove(entity, index)">
																		<span class="fas fa-trash-alt"></span>
																	</button>
																</slot> <!-- end slo optionRemove -->

																<slot name="optionEdit" :entity="entity" :index="index"> <!-- slot da opção de editar uma entidade -->
																	<button v-if="optionEdit" type="button" class="btn btn-success option option-icon" @click.prevent.stop="edit(entity, index)">
																		<span class="fas fa-pencil-alt"></span>
																	</button>
																</slot> <!-- end slot optionEdit -->

																<slot name="optionReport" :entity="entity" :index="index"> <!-- slot da opção gerar e baixar um relatório  com as informações desta entidade -->
																	<button v-if="optionReport" type="button" class="btn btn-info option option-icon" @click.prevent.stop="$emit('on_report', entity, index)">
																		<span class="icon fas fa-file-alt"></span>
																	</button>
																</slot> <!-- end slot optionReport -->
															</td> <!-- end td opções padrão -->
														</slot> <!-- end slot opções padrão -->
													</tr> <!-- end tr v-for entities -->

													<slot name="tblpos"></slot> <!-- slot a ser chamado depois da exibição do conteúdo da tabela -->
												</tbody> <!-- end tbody -->
											</table> <!-- end table -->
										</div> <!-- end class table-responsive -->
									</component> <!-- end show or vuestic-widget -->

									<slot name="pagination"> <!-- slot do paginador de resultados da tabela -->
										<b-pagination :limit="limitPagination" :align="alignPagination" :size="sizePagination" :total-rows="totalElements" v-model="page" :per-page="pageSize" /> <!-- paginador do bootstrap-vue -->
									</slot> <!-- end slot pagination -->
								</div> <!-- end col ? -->
							</div> <!-- end row ? -->
						</div> <!-- end slot secundary -->
          </vuestic-widget> <!-- end vuestic-widget -->
        </div> <!-- end col -->
      </div> <!-- end row -->

			<div class="modals">
        <vuestic-modal v-if="isShowModal" :show.sync="showSuccess" :small="true" :force="false" ref="successModal" :cancelClass="'none'"
            :okText="okText">
          <div slot="title">{{titleSuccess}}</div>
          <div>
            {{ removeSuccessMessage }}
          </div>
        </vuestic-modal>

        <vuestic-modal :show.sync="showConfirm" :small="true" :force="false" ref="confirmModal" cancelClass="btn btn-secondary"
            :okText="confirmText" :cancelText="cancelText" @ok="onRemove">
          <div slot="title">{{titleConfirm}}</div>
          <div>
            {{ removeConfirmMessage }}
          </div>
        </vuestic-modal>

				<modal-entity
					ref="showModalEntity"
					:title="titleModalEntity"
					:okClass="okClassModalEntity"
					:confirmText="confirmTextModalEntity"
					:entity="enityShow"
					:small="smallModalEntity"
					:descriptor="definitions.descriptorModal || descriptorEntity"
					:force="forceModalEntity"
					:trueStr="trueStr"
					:falseStr="falseStr"
					:defaultPattern="defaultPattern"
				>
					<template v-for="slotName of definitions.modalSlots">
						<div :key="slotName" :slot="slotName" slot-scope="{ property }">
							<slot :name="`modal_${slotName}`" :property="property"></slot>
						</div>
					</template>
				</modal-entity>
      </div> <!-- end class modal -->
    </div> <!-- end class wrapper-list-entities -->
  </div> <!-- end class wrapper-list-entities-vue -->
</template>

<script src="./list-entities.js"></script>

<style lang="css">
	@import url("./list-entities.css");
</style>
