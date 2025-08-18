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
      🚫{{ $t("price_table.warn") }}
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import TableLite from "vue3-table-lite";
import { useI18n } from "vue-i18n";

const { t } = useI18n(); // 取得 $t 函數
const table = computed(() => ({
  isLoading: false,
  columns: [
    {
      label: t("price_table.columns.size"),
      field: "cm",
      width: "10%",
      sortable: true,
      isKey: true,
    },
    {
      label: t("price_table.columns.aluminum_grip"),
      field: "aluminumGrip",
      width: "10%",
      sortable: true,
    },
    {
      label: t("price_table.columns.pill_grip_style"),
      field: "pillGrip",
      width: "10%",
    },
    {
      label: t("price_table.columns.special_edition"),
      field: "special",
      width: "10%",
    },
    {
      label: t("price_table.columns.special_carbon"),
      field: "cardDream",
      width: "10%",
    },
    {
      label: t("price_table.columns.notes"),
      field: "remark",
      width: "40%",
    },
  ],
  rows: [
    {
      cm: 10 + t("price_table.rows.cm_shallow_cup"),
      aluminumGrip: 1950,
      pillGrip: "X",
      special: "X",
      cardDream: 2750 + "🚫",
      remark: t("price_table.rows.note_8"),
    },
    {
      cm: 11 + t("price_table.rows.cm_shallow_cup"),
      aluminumGrip: 2050,
      pillGrip: 2550,
      special: 2750 + "🚫",
      cardDream: 2850,
      remark: t("price_table.rows.note_10"),
    },
    {
      cm: 12 + t("price_table.rows.cm_shallow_cup"),
      aluminumGrip: 2250,
      pillGrip: 2750,
      special: 2950 + "🚫",
      cardDream: 3050 + "🚫",
      remark: t("price_table.rows.note_12"),
    },
    {
      cm: 12 + t("price_table.rows.cm_deep_cup"),
      aluminumGrip: 2500,
      pillGrip: 3000,
      special: "X",
      cardDream: "X",
      remark: t("price_table.rows.note_14"),
    },
  ],
  totalRecordCount: 4,
  sortable: {
    order: "aluminumGrip",
    sort: "asc",
  },
}));
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
