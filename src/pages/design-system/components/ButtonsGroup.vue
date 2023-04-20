<template>
  <div class="col-12 flex gap-sm">
    <q-btn
      style="width: 100px"
      label="Brightness"
      v-bind="$vPrimaryBtn"
      class="primary-brightness"
    />
    <q-btn
      style="width: 100px"
      label="Brightness"
      v-bind="$vSecondaryBtn"
      class="secondary-brightness"
    />
    <q-btn
      style="width: 100px"
      label="Brightness"
      v-bind="$vTertiaryBtn"
      class="secondary-brightness"
    />
    <q-btn
      style="width: 100px"
      label="Brightness"
      v-bind="$vNegativeBtn"
      class="negative-brightness"
    />
    <q-btn
      style="width: 100px"
      label="Brightness"
      v-bind="$vWarningBtn"
      class="warning-brightness"
    />
    <q-btn
      style="width: 100px"
      label="Brightness"
      v-bind="$vInfoBtn"
      class="info-brightness"
    />
    <q-btn
      style="width: 100px"
      label="Brightness"
      v-bind="$vPositiveBtn"
      class="positive-brightness"
    />
  </div>
  <div class="col-12 flex gap-sm">
    <div
      v-for="(visual, idx) in [
        $vPrimaryBtn,
        $vSecondaryBtn,
        $vTertiaryBtn,
        $vNegativeBtn,
        $vWarningBtn,
        $vInfoBtn,
        $vPositiveBtn,
      ]"
      :key="idx"
    >
      <q-btn v-bind="visual" style="width: 100px" label="Default" />
    </div>
  </div>
  <div class="col-12 flex gap-sm">
    <div
      v-for="(visual, idx) in [
        $vPrimaryBtn,
        $vSecondaryBtn,
        $vTertiaryBtn,
        $vNegativeBtn,
        $vWarningBtn,
        $vInfoBtn,
        $vPositiveBtn,
      ]"
      :key="idx"
    >
      <q-btn v-bind="visual" style="width: 100px" outline label="Flat" />
    </div>
  </div>
  <div class="col-12 flex gap-sm">
    <div
      v-for="(visual, idx) in [
        $vPrimaryBtn,
        $vSecondaryBtn,
        $vTertiaryBtn,
        $vNegativeBtn,
        $vWarningBtn,
        $vInfoBtn,
        $vPositiveBtn,
      ]"
      :key="idx"
    >
      <q-btn v-bind="visual" style="width: 100px" flat label="Flat" />
    </div>
  </div>
</template>
