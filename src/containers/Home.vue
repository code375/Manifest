<template>
  <div id="app">
    <starter></starter>
    <tasks></tasks>
    <join></join>
    <faq></faq>
    <rules></rules>
  </div>
</template>

<script type="text/javascript">
import Header from '@/components/Header';
import Tasks from '@/components/Tasks';
import Join from '@/components/Join';
import FAQ from '@/components/FAQ';
import Rules from '@/components/Rules';

export default {
  components: {
    starter: Header,
    tasks: Tasks,
    join: Join,
    faq: FAQ,
    rules: Rules,
  },
}

</script>
