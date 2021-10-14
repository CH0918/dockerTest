<template>
  <div style="padding: 40px">
    <a-table :columns="columns" :data-source="data"> </a-table>
  </div>
</template>

<script>
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'tel',
    dataIndex: 'tel',
    key: 'tel',
  },
];
export default {
  data() {
    return {
      columns,
      data: [],
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    async getUserList() {
      // const api = 'http://159.75.75.87:8082/api/userList';
      const api = '/proxyApi/api/userList';
      const { data: res } = await this.$http.get(api);
      this.data = res.data;
      console.log('userData = ', res);
    },
  },
};
</script>

<style></style>
