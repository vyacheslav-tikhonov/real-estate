<template>
  <div class="flats-filter">

    <div class="rooms-filter filter">
      <div class="rooms-filter__title">
        КОМНАТЫ
      </div>
      <v-btn-toggle
        v-model="rooms"
        multiple
      >
        <v-btn
          background-color="#70D24E"
          height="40px"
        >
          S
        </v-btn>
        <v-btn
          height="40px"
        >
          1к
        </v-btn>
        <v-btn
          height="40px"
        >
          2к
        </v-btn>
        <v-btn
          height="40px"
        >
          3к
        </v-btn>
      </v-btn-toggle>
    </div>

    <div class="floor-filter filter">
      <div class="floor-filter__title">
        ЭТАЖ
      </div>
      <div class="floor-filter__inputs inputs">
        <input
          number
          min="0"
          max="120"
          step="1"
          class="input"
          :value="floor[0]"
          @change="onChangeFloor($event.target.value, 0)"
        />
        <div class="delimiter">-</div>
        <input
          class="input"
          :value="floor[1]"
          @change="onChangeFloor($event.target.value, 1)"
        />
      </div>
      <div>
        <v-range-slider
          v-model="floor"
          color="#70D24E"
          track-color="#D8D8D8"
          min="1"
          max="120"
        />
      </div>
    </div>

    <div class="square-filter filter">
      <div class="square-filter__title">
        ПЛОЩАДЬ, м<sup>2</sup>
      </div>
      <div class="square-filter__inputs inputs">
        <input
          number
          min="0"
          max="999"
          step="1"
          class="input"
          :value="square[0]"
          @change="onChangeSquare($event.target.value, 0)"
        />
        <div class="delimiter">-</div>
        <input
          number
          min="0"
          max="999"
          step="1"
          class="input"
          :value="square[1]"
          @change="onChangeSquare($event.target.value, 1)"
        />
      </div>
      <div>
        <v-range-slider
          v-model="square"
          color="#70D24E"
          track-color="#D8D8D8"
          min="1"
          max="999"
        />
      </div>
    </div>

    <div class="price-filter filter">
      <div class="price-filter__title">
        СТОИМОСТЬ, млн. р.
      </div>
      <div class="price-filter__inputs inputs">
        <input
          number
          min="0"
          max="120"
          step="0.1"
          class="input"
          :value="price[0]"
          @change="onChangePrice($event.target.value, 0)"
        />
        <div class="delimiter">-</div>
        <input
          number
          min="0"
          max="120"
          step="0.1"
          class="input"
          :value="price[1]"
          @change="onChangePrice($event.target.value, 1)"
        />
      </div>
      <div>
        <v-range-slider
          number
          min="0"
          max="120"
          step="0.1"
          color="#70D24E"
          track-color="#D8D8D8"
          v-model="price"
        >
        </v-range-slider>
      </div>
    </div>

    <div class="buttons">
      <button
        @click="updateSettingsObject()"
        class="apply-button"
      >
        Применить
      </button>
      <button
        @click="clearFilter()"
        class="clear-button">
        сбросить фильтр
      </button>
    </div>
  </div>
</template>

<script lang="ts" src="./FlatsFilter.ts" />
<style scoped lang="scss" src="./FlatsFilter.scss" />