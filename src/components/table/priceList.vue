<template>
  <table-lite
    class="table-lite"
    :is-static-mode="true"
    :is-loading="table.isLoading"
    :columns="table.columns"
    :rows="table.rows"
    :total="table.totalRecordCount"
    :sortable="table.sortable"
    :is-hide-paging="true"
    @is-finished="table.isLoading = false"
  >
  </table-lite>
  <div class="mx-auto max-w-2xl text-center my-4">
    <div class="my-2 text-xl md:text-2xl lg:text-2xl font-medium text-white">
      🚫表示該尺吋不可裝專利轉座
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import TableLite from "vue3-table-lite";

const table = reactive({
  isLoading: false,
  columns: [
    {
      label: "尺吋",
      field: "cm",
      width: "10%",
      sortable: true,
      isKey: true,
    },
    {
      label: "鋁握把",
      field: "aluminumGrip",
      width: "10%",
      sortable: true,
    },
    {
      label: "握丸樣式",
      field: "pillGrip",
      width: "10%",
    },
    {
      label: "特式版",
      field: "special",
      width: "10%",
    },
    {
      label: "特式卡夢",
      field: "cardDream",
      width: "10%",
    },
    {
      label: "備註",
      field: "remark",
      width: "40%",
    },
  ],
  rows: [
    {
      cm: 10 + "公分淺杯",
      aluminumGrip: 1950,
      pillGrip: "X",
      special: "X",
      cardDream: 2750 + "🚫",
      remark: "可上8號卡夢200米",
    },
    {
      cm: 11 + "公分淺杯",
      aluminumGrip: 2050,
      pillGrip: 2550,
      special: 2750 + "🚫",
      cardDream: 2850,
      remark: "可上10號卡夢200米",
    },
    {
      cm: 12 + "公分淺杯",
      aluminumGrip: 2250,
      pillGrip: 2750,
      special: 2950 + "🚫",
      cardDream: 3050 + "🚫",
      remark: "可上12號卡夢200米",
    },
    {
      cm: 12 + "公分深杯",
      aluminumGrip: 2500,
      pillGrip: 3000,
      special: "X",
      cardDream: "X",
      remark: "可上14號卡夢200米",
    },
  ],
  totalRecordCount: 4,
  sortable: {
    order: "aluminumGrip",
    sort: "asc",
  },
});
</script>

<style>
.vtl {
  font-size: 22px;
  font-weight: 600;
}
.table-lite {
  white-space: nowrap;
}
.color-red {
  color: red !important;
}
@media screen and (max-width: 768px) {
  .vtl {
    font-size: 16px;
    font-weight: 500;
  }
}
@media screen and (max-width: 375px) {
  .vtl {
    font-size: 14px;
    font-weight: 500;
  }
}
</style>
