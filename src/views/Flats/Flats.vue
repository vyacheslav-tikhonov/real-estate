<template>
  <div class="real-estate">
    <header class="header">
      <h1 class="header__title">
        Lorem ipsum dolor sit
      </h1>
    </header>

    <main>
      <aside class="filter">
        <FlatsFilter
          ref="flatsFilter"
          @update="onFilterUpdate()"
        />
      </aside>

      <section class="flats">
        <FlatCard
          v-for="flat in flats"
          :key="flat.id"
          :flat="flat"
        />
      </section>
    </main>
  </div>
</template>

<script lang="ts" src="./Flats.ts" />
<style scoped lang="scss" src="./Flats.scss" />
