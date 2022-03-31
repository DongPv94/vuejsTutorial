<template>
  <div with="100%" class="horizontal">
    <div with="55%" height="100%">
      <table with="100%" height="100%" border="1px">
        <Scrollbar
          ><thead>
            <tr>
              <th text-align="left">MID</th>
              <th text-align="left">Status</th>
              <th text-align="left">Mess Type</th>
              <th text-align="left">Amount</th>
              <th text-align="left">Currency</th>
              <th text-align="left">Clearing Code</th>
              <th text-align="left">Create Date</th>
              <th text-align="left">Receiver</th>
              <th text-align="left">Sender</th>
              <th text-align="left">Update By</th>
              <th text-align="left">Update Date</th>
              <th text-align="left">Branch</th>
              <th text-align="left">Department</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="infor of infos" :key="infor.id">
              <td text-align="left">{{ infor.id }}</td>
              <td text-align="left">{{ infor.pmid }}</td>
              <td text-align="left">{{ infor.branchHandle }}</td>
              <td text-align="left">{{ infor.deptHandle }}</td>
              <td text-align="left">{{ infor.subDeptHandle }}</td>
              <td text-align="left">{{ infor.userHandle }}</td>
            </tr>
          </tbody></Scrollbar
        >
      </table>
    </div>

    <textarea width="30%" height="100%"></textarea>
    <div width="15%" height="100%" class="vertical">
      <b-button variant="success">Create</b-button>
      <button>Return</button>
    </div>
  </div>
</template>

<style >
ul {
  list-style-type: circle;
  padding: 1px;
}

.horizontal {
  display: flex;
  flex-direction: row;
  overflow: auto;
}

.vertical {
  display: flex;
  flex-direction: column;
}

table {
  overflow: auto;
}

Scrollbar {
}
</style>

<script>
import MessageService from "@/services/MessageService";
//import axios from "axios";
export default {
  name: "MyPayment",
  data() {
    return {
      infos: [],
    };
  },
  //   mounted() {
  //     axios
  //       .get("http://localhost:8081/dong/test2")
  //       .then((response) => {
  //         this.infos = response;
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  methods: {
    getListPaging() {
      MessageService.getPaging()
        .then((response) => {
          this.infos = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getListPaging();
  },
};
</script>
