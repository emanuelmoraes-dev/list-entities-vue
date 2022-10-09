<template>
    <list-entities :useCard="true" :isCompact="false"></list-entities>
</template>

<script>
    import { ListEntities } from '@list-entities-vue'
    export default {
        components: { ListEntities },
        setup() {
            return {}
        }
    }
</script>
