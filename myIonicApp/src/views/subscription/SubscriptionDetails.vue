<template>
  <div class="app">
    <div class="app-intro">
      <ion-title><h1>SUBSCRIPTION</h1></ion-title>
      <br />
      <ion-input
        type="email"
        class="emailInput"
        v-model="email"
        placeholder="Enter subscriber's email Id"
      />

      <br />
      <div v-if="emailEntered">
        <h5>
          <input type="radio" id="monthly" value="Monthly" v-model="plan" />
          &nbsp;
          <ion-label>Monthly</ion-label>
          &nbsp;&nbsp;&nbsp;
          <input type="radio" id="yearly" value="Yearly" v-model="plan" />
          &nbsp;
          <ion-label>Yearly</ion-label>
        </h5>
        <pre></pre>
      </div>

      <div v-if="planSelected && emailEntered">
        <div>
          <ion-label>Mail me subscription updates</ion-label><br /><ion-toggle
            color="primary"
          ></ion-toggle>
        </div>
        <br />
        Subscrition will be get started once you pay the subscription amount
        using link shared with you on your email.
        <span class="error" v-if="this.plan == 'Yearly'"
          ><b>Subscription Charges : $115 !!! </b></span
        >
        <span class="error" v-if="this.plan == 'Monthly'"
          ><b>Subscription Charges : $10 !!! </b></span
        >
        <br /><br /><br />
        <ion-button class="buttons" @click="subscribe()">Subscribe</ion-button>
        &nbsp;&nbsp;&nbsp;
        <ion-button class="buttons" @click="resetInput">Reset</ion-button>
        <br /><br />
        <div class="subscriptionMsg" v-if="this.isSubscribed">
          <h3>Subscription link has been shared on email !!!</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { IonButton, IonInput, IonTitle, IonToggle, IonLabel } from "@ionic/vue";

export default defineComponent({
  name: "SubscriptionContainer",
  data() {
    return {
      email: "",
      plan: "",
      isSubscribed: false,
    };
  },
  components: {
    IonButton,
    IonInput,
    IonTitle,
    IonToggle,
    IonLabel,
  },
  methods: {
    resetInput() {
      this.email = "";
      this.plan = "";
      this.isSubscribed = false;
    },
    subscribe: function () {
      this.isSubscribed = true;
    },
  },
  computed: {
    emailEntered: function () {
      if (this.email != "") {
        return true;
      } else {
        this.resetInput();
        return false;
      }
    },
    planSelected: function () {
      if (this.plan != "") return true;
      return false;
    },
  },
});
</script>

<style scoped>
ion-toolbar {
  --border-style: none;
  --background: #373b5e;
  --color: white;
  --min-height: 8rem;
  --stripe: #373b5e;
  --bg: #3e4368;
  --background: transparent;
  text-align: center;
  background: linear-gradient(135deg, var(--bg) 25%, transparent 25%) -50px 0,
    linear-gradient(225deg, var(--bg) 25%, transparent 25%) -50px 0,
    linear-gradient(315deg, var(--bg) 25%, transparent 25%),
    linear-gradient(45deg, var(--bg) 25%, transparent 25%);
  background-size: 100px 100px;
  background-color: var(--stripe);
}

.subscriptionMsg {
  color: yellowgreen;
}

ion-header {
  background-color: #373b5e;
}

.emailInput {
  color: black;
  max-width: 300px;
  background-color: white;
  margin: auto;
  border-radius: 5px;
}

.app {
  --border-style: none;
  --background: #373b5e;
  --color: white;
  --min-height: 8rem;
  --stripe: #373b5e;
  --bg: #3e4368;
  --background: transparent;
  background: linear-gradient(135deg, var(--bg) 25%, transparent 25%) -50px 0,
    linear-gradient(225deg, var(--bg) 25%, transparent 25%) -50px 0,
    linear-gradient(315deg, var(--bg) 25%, transparent 25%),
    linear-gradient(45deg, var(--bg) 25%, transparent 25%);
  background-size: 100px 100px;
  background-color: var(--stripe);
}

.app-intro {
  color: burlywood;
  text-align: center;
  padding-top: 10px;
  margin-top: 18px;
  padding-bottom: 02px;
  min-height: 537px;
}

.ion-toggle {
  --handle-spacing: 0px;
}

.buttons {
  min-width: 130px;
}
</style>
