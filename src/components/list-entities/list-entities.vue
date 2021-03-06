<template>
  <div class="wrapper-list-entities-vue"> <!-- classe que encapsula todos os componentes de list-entities-vue -->
    <div class="wrapper-list-entities"> <!-- classe que encapsula o componente list-entities -->
      <div class="row">
        <div class="col-xs-12 col-md-12">
          <component
						:is="rootComponent"
            :hidePrimary="hideSearch"
            :compactSecundary="!hideSearch && isCompact"
            :headerText="isCompact ? dictionary.titleTable : dictionary.titleSearch"
						class="primary"
          >
						<template v-if="(isCompact ? $slots.titleTable : $slots.titleSearch) && !hideSearch" slot="headerText"> <!-- se o usuário passar o primeiro título em forma de slot -->
							<slot :name="isCompact ? 'titleTable' : 'titleSearch'"></slot> <!-- exibe o slot responsável por exibir o primeiro título -->
						</template> <!-- end v-if -->

						<div class="search-content">
							<slot name="beforeSearch"></slot>

							<div v-show="!hideSearch">
								<div class="row">
									<div v-if="existsOptionsSearch" :class="classOptionsSearch"> <!-- select de atributos a serem buscados -->
										<div class="form-group form-group-select">
											<!-- <label class="before-select">Pesquisar: </label> -->
											<b-form-select
												v-model="sync.attrSearch"
												:options="optionsSearch"
											/> <!-- select dos tributos a serem filtrados -->
										</div> <!-- end class form-group -->
									</div> <!-- end col -->

									<div v-if="existsOptionsSearch && existsOperators" :class="classOperators">

										<!-- select com as operações a serem usadas para filtrar a busca -->

										<div class="form-group form-group-select">
											<!-- <label class="before-select">Operador: </label> -->
											<b-form-select
												v-model="searchOperator"
												:options="operators"
											/> <!-- select de operações -->
										</div> <!-- end class form-group -->
									</div> <!-- end col -->

									<div :class="[] | getClassInput(existsOptionsSearch, existsOperators, classInput)"> <!-- campo de pesquisa -->
										<div class="form-group">
											<div class="input-group d-flex">
												<div class="flex-1">
													<input
														id="txtsearch"
														name="search"
														v-model="sync.inputSearch"
														@keypress="keyHandler($event)"
														ref="txtSearch"
													/> <!-- campo de pesquisa -->
													<label class="control-label" for="txtsearch">{{ dictionary.labelSearch }}:</label>
													<i class="bar"></i>
												</div>
												<button
													@click.prevent.stop="search(true)"
													:class="btnSearchClass"
												>{{ dictionary.btnSearch }}</button>
											</div> <!-- end class input-group -->
										</div> <!-- end class form-group -->
									</div> <!-- end col -->
								</div> <!-- end class row -->
							</div>

							<slot name="afterSearch"></slot>
						</div> <!-- end class search-content -->

						<template slot="secundary">
							<!--
								slot usado para passar um html a ser exibido abaixo deste widget se 'isCompact'
								for igual a false ou dentro deste widget se 'isCompact' for true
							-->

							<div :class="{'row': !isCompact}">
								<div :class="{'col-xs-12 col-md-12': !isCompact}">
									<component :is="componentShowTable" :headerText="dictionary.titleTable" class="secundary">
										<template v-if="$slots.titleTable" slot="headerText"> <!-- se o usuário passar o segundo título em forma de slot -->
											<slot name="titleTable"></slot> <!-- exibe o slot responsável por exibir o segundo título -->
										</template> <!-- end v-if -->
										<div class="entities-content">
											<slot name="beforeTable"></slot> <!-- slot chamado antes de mostrar a tabela de resultados -->

											<div class="table-responsive">
												<table class="table table-striped first-td-padding">
													<thead>
														<tr>
															<td v-if="$scopedSlots.check">{{tdCheckName}}</td>
															<td
																class="header-attr display-attr"
																:class="{'pointer': !descriptorEntity[attr.value] || !descriptorEntity[attr.value].disableSort}"
																v-show="!descriptorEntity[attr.value] || !descriptorEntity[attr.value].hidden"
																@click="(!descriptorEntity[attr.value] || !descriptorEntity[attr.value].disableSort) && onClickHeader(attr.value)"
																v-for="attr of definitions.displayAttrs" :key="attr.value"
															> <!-- td atributos -->
																<span v-show="definitions.sort && definitions.sort[0] !== '-' && (definitions.sort == attr.value || definitions.sort.substring(1) == attr.value) && (!descriptorEntity[attr.value] || !descriptorEntity[attr.value].disableSort)" class="fas fa-angle-down"></span>
																<span v-show="definitions.sort && definitions.sort[0] === '-' && (definitions.sort == attr.value || definitions.sort.substring(1) == attr.value) && (!descriptorEntity[attr.value] || !descriptorEntity[attr.value].disableSort)" class="fas fa-angle-up"></span>
																{{ attr.display | translate(dictionary) }}:
															</td> <!-- end v-for td atributos -->

															<td
																class="header-attr last-attr"
																v-if="!hideLastAttr && lastAttr"
																:class="{'pointer': !descriptorEntity[lastAttr.value] || !descriptorEntity[lastAttr.value].disableSort}"
																@click="(!descriptorEntity[lastAttr.value] || !descriptorEntity[lastAttr.value].disableSort) && onClickHeader(lastAttr.value)"
															> <!-- td lastAttr -->
																<span v-show="definitions.sort && definitions.sort[0] !== '-' && (definitions.sort == lastAttr.value || definitions.sort.substring(1) == lastAttr.value) && (!descriptorEntity[lastAttr.value] || !descriptorEntity[lastAttr.value].disableSort)" class="fas fa-angle-down"></span>
																<span v-show="definitions.sort && definitions.sort[0] === '-' && (definitions.sort == lastAttr.value || definitions.sort.substring(1) == lastAttr.value) && (!descriptorEntity[lastAttr.value] || !descriptorEntity[lastAttr.value].disableSort)" class="fas fa-angle-up"></span>
																{{ lastAttr.headerText | translate(dictionary) }}:
															</td> <!-- end td lastAttr -->

															<td v-for="opt of Object.keys(options)" :key="opt">{{ options[opt] || '' }}</td> <!-- headers das opções a serem exibidas após os atributos -->
															<td class="text-center" v-if="showOptions && ($scopedSlots.td_option || optionRemove || optionEdit || optionReport || optionView)">{{ dictionary.tdOptionName }}</td> <!-- nome do header a aparecer acima das opções padrão na tabela -->
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
																		{{ entity | getValue(attr) | parseAttr(entity, attr, descriptorEntity, joinSep, dictionary.trueStr, dictionary.falseStr, (...args) => translatePattern(...args), defaultPattern) }}
																	</slot>
																</td> <!-- end v-for displayAttrs -->

																<td v-if="!hideLastAttr && definitions.defaultLastAttr">
																	<slot :name="`${lastAttr.value}_slot`" :entity="entity" :index="index">
																		{{ entity.__lastAttrValue | parseAttr(entity, lastAttr, descriptorEntity, joinSep, dictionary.trueStr, dictionary.falseStr, (...args) => translatePattern(...args), defaultPattern) }}
																	</slot>
																</td>
															</slot> <!-- end slot 'entity_line' -->

															<td v-for="opt of Object.keys(options)" :key="opt"> <!-- opções a serem exibidas ao final da linha depois de exibir os atributos e antes de exibir as opções padrão -->
																<slot :name="opt" :entity="entity" :index="index"></slot>
															</td> <!-- end v-for options -->

															<slot v-if="showOptions" name="td_option" :entity="entity" :index="index"> <!-- slot as opções padrão a serem exibidas ao final de cada linha -->
																<td class="text-center" v-if="$scopedSlots.td_option || optionRemove || optionEdit || optionReport || optionView"> <!-- td com as ações padrão a serem realizadas em uma entidade -->
																	<slot name="beforeDefaultOptions" :entity="entity" :index="index"></slot>

																	<slot name="optionView" :entity="entity" :index="index"> <!-- slot da opção de visualização da entidade em um modal -->
																		<button v-if="optionView" type="button" class="btn btn-warning option option-icon" @click.prevent.stop="entityView(entity, index)">
																			<span class="far fa-eye"></span>
																		</button>
																	</slot> <!-- end slot optionView -->

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

																	<slot name="optionRemove" :entity="entity" :index="index"> <!-- slot da opção de remoção da entidade -->
																		<button v-if="optionRemove" type="button" class="btn btn-danger option option-icon" @click.prevent.stop="remove(entity, index)">
																			<span class="fas fa-trash-alt"></span>
																		</button>
																	</slot> <!-- end slo optionRemove -->

																	<slot name="afterDefaultOptions" :entity="entity" :index="index"></slot>
																</td> <!-- end td opções padrão -->
															</slot> <!-- end slot opções padrão -->
														</tr> <!-- end tr v-for entities -->

														<slot name="tblpos"></slot> <!-- slot a ser chamado depois da exibição do conteúdo da tabela -->
													</tbody> <!-- end tbody -->
												</table> <!-- end table -->
											</div> <!-- end class table-responsive -->
										</div> <!-- end class entities-content -->
									</component> <!-- end show or vuestic-widget -->

									<slot name="pagination"> <!-- slot do paginador de resultados da tabela -->
										<b-pagination :limit="limitPagination" :align="alignPagination" :size="sizePagination" :total-rows="sync.totalElements" v-model="sync.page" :per-page="pageSize" /> <!-- paginador do bootstrap-vue -->
									</slot> <!-- end slot pagination -->

									<slot name="afterTable"></slot>
								</div> <!-- end col ? -->
							</div> <!-- end row ? -->
						</template> <!-- end slot secundary -->
          </component> <!-- end root component -->
        </div> <!-- end col -->
      </div> <!-- end row -->

			<div class="modals">
        <vuestic-modal v-if="isShowSuccessModalRemove" :show.sync="showSuccess" :small="true" :force="false" ref="successModal" :cancelClass="'none'"
            :okText="dictionary.okTextModal">
          <template slot="title">{{dictionary.titleSuccessModal}}</template>
          <div>
            {{ dictionary.removeSuccessMessage }}
          </div>
        </vuestic-modal>

        <vuestic-modal :show.sync="showConfirm" :small="true" :force="false" ref="confirmModal" cancelClass="btn btn-secondary"
            :okText="dictionary.confirmTextModal" :cancelText="dictionary.cancelTextModal" @ok="onRemove">
          <template slot="title">{{dictionary.titleConfirmModal}}</template>
          <div>
            {{ dictionary.removeConfirmMessage }}
          </div>
        </vuestic-modal>

				<modal-entity
					ref="showModalEntity"
					:okClass="okClassModalEntity"
					:entity="enityShow"
					:small="smallModalEntity"
					:descriptor="definitions.descriptorModal || descriptorEntity"
					:force="forceModalEntity"
					:defaultPattern="defaultPattern"
					:joinSep="modalJoinSep"
					:i18nArgs="i18nArgsModal"
					:localDictionary="localDictionaryModal || dictionary"
				>
					<template v-for="slotName of modalSlots" :slot="slotName" slot-scope="{ property, index, descriptorValue }">
						<div :key="slotName">
							<slot :name="`modal_${slotName}`" :property="property" :index="index" :descriptorValue="descriptorValue"></slot>
						</div>
					</template>
				</modal-entity>
      </div> <!-- end class modal -->
    </div> <!-- end class wrapper-list-entities -->
  </div> <!-- end class wrapper-list-entities-vue -->
</template>

<script src="./list-entities.js"></script>

<style lang="css">
	@import "./list-entities.css";
</style>
