<template>
  <h2>Verifying bookings</h2>
</template>

<script>
import axios from 'axios';

export default {
  name: 'VerifyBookings',
  created() {
    const ref = this.$route.params.ref;
    axios
      .post(
        `${this.$store.state.server.requestUri}/users/bookings/verify/${ref}`,
        {
          userId: this.user._id,
          tourId: this.$route.params.tourId,
        },
        {
          headers: {
            Authorization: `Bearer ${this.$store.state.accessToken}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        this.showAlert('success', 'Booking verified successfully');
        this.$router.push({ name: 'bookings' });
      })
      .catch((error) => console.log(error.response));
  },
};
</script>

<style scoped></style>
