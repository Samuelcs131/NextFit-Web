<template>
  <div class="highlight-code-wrapper highlight-code">
    <pre
      class="q-ma-none"
    ><code :class="language ? `language-${language}` : 'language-js'">{{ code.trim() }}</code></pre>

    <q-btn
      class="copy-button-action"
      color="primary"
      round
      dense
      flat
      size="sm"
      icon="content_copy"
      @click="copy"
    >
      <q-tooltip>Copy to Clipboard</q-tooltip>
    </q-btn>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { copyToClipboard } from 'quasar'
import { LangaguesCode } from './enums/LangaguesCode.enum'
import hljs from 'highlight.js'

interface IProps {
  code: string
  language?: `${LangaguesCode}`
}

const props = defineProps<IProps>()

function copy() {
  copyToClipboard(props.code)
}

onMounted(() => {
  hljs.highlightAll()
  hljs.configure({ ignoreUnescapedHTML: true })
})
</script>
<style lang="scss" scoped>
.highlight-code-wrapper {
  position: relative;

  code {
    padding: 10px;
    background-color: $neutral !important;
  }
  .copy-button-action {
    position: absolute;
    top: 5px;
    right: 5px;
  }
}
</style>
