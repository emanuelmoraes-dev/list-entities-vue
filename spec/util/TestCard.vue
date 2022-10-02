<template>
    <div class="test-card">
        <div class="header">
            <slot name="header">{{header}}</slot>
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['header'],
        setup () {
            return {}
        }
    }
</script>
