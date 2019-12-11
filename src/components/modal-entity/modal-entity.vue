<template>
	<div class="wrapper-list-entities-vue"> <!-- classe que encapsula todos os componentes de list-entities-vue -->
		<div class="wrapper-modal-entity"> <!-- classe que encapsula o componente modal-entity -->
			<vuestic-modal
        ref="modal"
				cancelClass="none"

				:headerText="dictionary.titleModalEntity"
        :show.sync="show"
				:small="small"
				:force="force"
				:okText="dictionary.okTextModal"
				:okClass="okClass"

				@ok="() => $emit('ok')"
			> <!-- componente de modal do vuestic  -->
        <div class="content">
          <div
            v-for="(property, index) of Object.keys(descriptorEntity)"
            :key="property + '_' + index"
          > <!-- percorre as propriedades do 'descriptorEntity' a serem exibidas no modal -->
            <slot :name="`${property}_before`" :property="property" :index="index" :descriptorValue="descriptorEntity[property]"> <!-- slot a ser passado antes de exibir a propriedade --></slot> <!-- end slot `${property}_before` -->
						<slot :name="`${property}_slot`" :property="property" :index="index" :descriptorValue="descriptorEntity[property]">
							<div class="line-modal-property"> <!-- se o usuário não informar o que deverá ser exibido para esta propriedade -->
								<div class="property-name">{{ descriptorEntity[property].display | translate(dictionary) }}</div> <!-- o nome da propriedade a ser exibida está presente em display no 'descriptor' desta propriedade -->
								<div class="property-value">
									<span v-if="descriptorEntity[property].array && ('joinSep' in descriptorEntity[property] ? descriptorEntity[property].joinSep === '\n' : joinSep === '\n')">
										<!--
											se o valor a ser exibido na propriedade for um array e o 'joinSep' presente no 'descriptor' for uma
											quebra de linha ('\n'), os valores presentes neste array devem ser exibidos um abaixo do outro
										-->
										<span
											v-for="(item, index) of getPropertyValue(entity, property)"
											:key="index"
										> <!-- percorre cada valor do array a ser exibido como valor desta propriedade -->
											{{ item | parseItem(entity, descriptorEntity[property], dictionary.trueStr, dictionary.falseStr, (...args) => translatePattern(...args), defaultPattern) }} <!-- exibe cada valor presente no array -->
											<br v-if="(index+1) < getPropertyValue(entity, property).length"> <!-- se o valor não for o último do array coloca-se uma quebra de linha -->
										</span> <!-- end v-for -->
									</span> <!-- end v-if -->
									<span v-else> <!-- exibe de maneira genérica o valor da propriedade -->
										{{ entity | getAttr(property) | parseValue(entity, descriptorEntity[property], dictionary.trueStr, dictionary.falseStr, (...args) => translatePattern(...args), defaultPattern, joinSep) }}
									</span> <!-- end v-else -->
								</div> <!-- end class property-value -->
							</div> <!-- end class line-modal-property -->
						</slot> <!-- chama slot `${property}_slot` -->
            <slot :name="`${property}_after`" :property="property" :index="index" :descriptorValue="descriptorEntity[property]"> <!-- slot a ser passado depois de exibir a propriedade -->
            </slot> <!-- end slot `${property}_before` -->
          </div> <!-- end v-for -->
        </div> <!-- end class content -->
			</vuestic-modal> <!-- end va-model -->
		</div> <!-- end class wrapper-modal-entity -->
	</div> <!-- end class wrapper-list-entities-vue -->
</template>

<script src="./modal-entity.js"></script>

<style lang="css">
  @import url('./modal-entity.css');
</style>
