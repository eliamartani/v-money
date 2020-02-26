<template>
  <section class="docs">
    <div class="docs__container col-4 col-xl-6 col-md-8 col-sm-10 col-xs-12">
      <header>
        <h2>v-money</h2>
        <h3>Currency mask input for Vue</h3>
        <p>
          <a href="https://github.com/eliamartani/v-money"
            >https://github.com/eliamartani/v-money</a
          >
        </p>
      </header>
      <div class="docs__content">
        <div>
          <label>Component</label>
          <div class="columns">
            <div class="column col-6 col-sm-12">
              <money v-model="price" class="form-input input-lg" v-bind="config"></money>
            </div>
            <div class="column col-6 col-sm-12">
              <h3>{{ price }}</h3>
            </div>
          </div>
        </div>

        <div>
          <label>Directive</label>
          <div class="columns">
            <div class="column col-6 col-sm-12">
              <input
                type="tel"
                v-money="config"
                v-model.lazy="priceDirective"
                class="form-input input-lg"
                style="text-align: right"
              />
            </div>
            <div class="column col-6 col-sm-12">
              <h3>{{ priceDirective }}</h3>
            </div>
          </div>
        </div>

        <div>
          <label
            >Directive on Custom Component (TextField from
            <a href="https://vuetifyjs.com/components/text-fields">vuetify</a>)</label
          >
          <div class="columns">
            <div class="column col-6 col-sm-12">
              <v-text-field v-money="config" v-model.lazy="priceVuetify"></v-text-field>
            </div>
            <div class="column col-6 col-sm-12">
              <h3>{{ priceVuetify }}</h3>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column col-2 col-sm-3">
            <label class="form-label" for="prefix">Prefix</label>
          </div>
          <div class="column col-2 col-sm-3">
            <input class="form-input" type="text" id="prefix" v-model="config.prefix" />
          </div>

          <div class="column col-2 col-sm-3">
            <label class="form-label" for="suffix">Suffix</label>
          </div>
          <div class="column col-2 col-sm-3">
            <input class="form-input" type="text" id="suffix" v-model="config.suffix" />
          </div>

          <div class="column col-2 col-sm-3">
            <label class="form-label" for="precision">Precision</label>
          </div>
          <div class="column col-2 col-sm-3">
            <input
              class="form-input"
              type="number"
              id="precision"
              v-model.number="config.precision"
              min="0"
              max="4"
            />
          </div>

          <div class="column col-2 col-sm-3">
            <label class="form-label" for="decimal">Decimal</label>
          </div>
          <div class="column col-2 col-sm-3">
            <input class="form-input" type="text" id="decimal" v-model="config.decimal" />
          </div>
          <div class="column col-2 col-sm-3">
            <label class="form-label" for="thousands">Thousands</label>
          </div>
          <div class="column col-2 col-sm-3">
            <input class="form-input" type="text" id="thousands" v-model="config.thousands" />
          </div>
          <div class="column col-4 col-sm-5">
            <div class="form-group">
              <label class="form-checkbox">
                <input type="checkbox" id="masked" v-model="config.masked" />
                <i class="form-icon"></i> Masked Output
              </label>
            </div>
          </div>
        </div>

        <hr />

        <div>
          <h3>Features</h3>
          <ul>
            <li>Lightweight (&lt;2KB gzipped)</li>
            <li>Dependency free</li>
            <li>Mobile support</li>
            <li>Component or Directive flavors</li>
            <li>Accept copy/paste</li>
            <li>Editable</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import * as Money from '../main';
import vuetify from 'vuetify';

Vue.use(Money);
Vue.use(vuetify);

export default {
  data() {
    return {
      price: 1234.5,
      priceDirective: 5432.1,
      priceVuetify: 6789.1,
      config: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        suffix: ' #',
        precision: 2,
        masked: false,
      },
    };
  },
};
</script>

<style lang="css">
@import url('https://cdnjs.cloudflare.com/ajax/libs/spectre.css/0.2.14/spectre.min.css');

.docs {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  min-height: 100vh;
}

.docs__container {
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  padding: 2rem;
}

.v-money {
  text-align: right;
}

input {
  font-family: monospace;
  font-size: 1.8rem;
  width: 100%;
}

body {
  background: #eee;
}

h2,
h3,
p {
  margin: 0;
}

h2 {
  font-size: 3rem;
}

h3 {
  font-size: 2rem;
}

header {
  margin-bottom: 3rem;
}

.input-group__input {
  width: 100%;
}

.input-group__input input {
  width: 100%;
}
</style>
