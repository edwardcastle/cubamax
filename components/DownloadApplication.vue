<template>
  <!-- Left column -->
  <div class="col-span-12 text-center md:col-span-6 my-auto">
    <!-- Text -->
    <p class="md:text-5xl text-xl text-primary font-normal mt-10">
      Visita la tienda para que descargues nuestro APP
    </p>
    <!-- End Text-->

    <!-- Download Buttons -->
    <div class="lg:justify-end xs:flex xs:gap-x-6 mx-auto mt-12">
      <!-- Android -->
      <div class="w-full xs:w-fit">
        <button class="secondary flex my-auto">
          <img src="/static/icons/android.svg" alt="android" />
          <p class="self-center">para android</p>
        </button>
      </div>
      <!-- End Android -->

      <!-- Iphone -->
      <div class="w-full xs:w-fit mt-8 xs:mt-auto">
        <button class="secondary flex my-auto">
          <img src="/static/icons/apple.svg" alt="apple" />
          <p class="self-center ml-5">para iphone</p>
        </button>
      </div>
      <!-- end Iphone -->
    </div>
    <!-- end Download Buttons -->
  </div>
  <!-- end Left column -->

  <!-- Right column -->
  <div class="col-span-12 md:col-span-6 mx-auto my-auto">
    <div class="w-fit h-fit">
      <img src="/static/icons/cellphone-android.svg" alt="" />
    </div>
  </div>
  <!-- end Rigth column -->
</template>
