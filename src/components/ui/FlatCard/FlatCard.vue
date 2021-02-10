<template>
  <div
    @mouseover="onFocus(true)"
    @mouseout="onFocus(false)"
    :outlined="!isHovered"
    :class="{'flat-card_shadowed': isHovered}"
    class="flat-card">

    <div class="header">
      <div class="header__floor">
        {{ this.flour }}
      </div>
      <div class="header__flat-size">
        <div>
          {{ this.rooms }}
        </div>
        <div class="delimiter">
          -
        </div>
        <div>
          <span>{{ this.size }}</span>
          <sup>{{ square }}</sup>
        </div>
      </div>
    </div>

    <div class="plan">
      <div class="plan__number">
        {{ number }}
      </div>

      <transition name="resize">
        <div 
          v-if="!isHovered"
          class="plan__image">
            <img
              class="image"
              :src="getImageUrl"
            >
        </div>
        <div 
          v-else
          class="plan__image plan__image_hovered">
            <img
              class="image_hovered"
              :src="getImageUrl"
            >
        </div>
      </transition>
    </div>

    <div class="footer">
      <div class="footer__content">
        <div class="footer__price">
          {{ price }}
        </div>
        <div class="footer__price-per-meter">
          <span>{{ pricePerMeter }}</span>
          <sup>{{ square }}</sup>
        </div>
      </div>
      <transition name="appearance">
        <div 
          v-show="isHovered"
          class="footer__button">
          <button
            class="button"
          >
            Подробнеe
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" src="./FlatCard.ts" />
<style lang="scss" src="./FlatCard.scss" />
