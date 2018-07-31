<template>
  <div class="table">
    <div>
      <img :src="require('@/images/file.png')" width="20" height="20">
      <a href="https://dorahacks-fund.oss-us-west-1.aliyuncs.com/files/Travel%20reimbursement.xlsx" class="link">Travel Reimbursement</a>
    </div>
    <br>
    <br>
    <div >
      <img :src="require('@/images/file.png')" width="20" height="20">
      <a href="https://dorahacks-fund.oss-us-west-1.aliyuncs.com/files/dorahacks%20result%20without%20personal%20info.xls" class="link">Result of the Blockchain Hackathon</a>
    </div>
    <br>
    <br>
    <br>
    <router-link to="/hackathon/blockchain"><img :src="require('@/images/back2.png')" width="30" height="30"></router-link>
  </div>
</template>

<script>
export default {
  name: 'BlockchainBonus'
}
</script>

<style scoped>
.table {
  text-align: center;
  margin-top: 100px;
}
.link {
  text-decoration: none;
  color: gray;
}
.table .link:hover{
  text-decoration: underline;
  color: black;
}
</style>
