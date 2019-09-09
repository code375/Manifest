<template>
  <div id="app">
    <starter></starter>
    <tasks></tasks>
    <join></join>
    <faq></faq>
    <rules></rules>
    <basement></basement>
  </div>
</template>

<script type="text/javascript">
import Header from '@/components/Header';
import Tasks from '@/components/Tasks';
import Join from '@/components/Join';
import FAQ from '@/components/FAQ';
import Rules from '@/components/Rules';
import Footer from '@/components/Footer';

export default {
  components: {
    starter: Header,
    tasks: Tasks,
    join: Join,
    faq: FAQ,
    rules: Rules,
    basement: Footer,
  },
}

</script>
