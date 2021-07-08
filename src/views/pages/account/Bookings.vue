<template>
  <main class="main">
    <div class="card-container">
      <card
        v-for="booking in bookings"
        :tour="booking.tour"
        :key="booking.tour._id"
      ></card>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import Card from '../../components/cards/Card';

export default {
  name: 'Bookings',
  data() {
    return {
      bookings: {},
    };
  },
  components: { Card },
  created() {
    axios
      .get(
        `${this.$store.state.server.requestUri}/users/bookings/my-bookings`,
        {
          headers: {
            Authorization: `Bearer ${this.$store.state.accessToken}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data.data.bookings);
        this.bookings = response.data.data.bookings;
      })
      .catch((error) => console.log(error.response));
  },
};
</script>

<style scoped></style>
