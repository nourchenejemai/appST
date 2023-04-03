<template>
  <v-form @submit.prevent="handleSubmit" ref="form">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-window v-model="step">
          <v-window-item :value="1">
            <v-row>
              <v-col cols="12" sm="6">
                <v-card-text class="mt-12">
                  <h4 class="text-center">Login in to Your Account</h4>
                  <h6 class="text-center grey--text">Login in to your account so you can continue building
                    <br> and editing your onboarding flows 
                  </h6>
                  <v-row align="center" justify="center">
                    <v-col cols="12" sm="8">
                      <v-text-field label="Email" outlined dense color="blue"  class="mt-16" v-model="email" :rules="emailRules"></v-text-field>
                      <v-text-field label="Password" outlined dense color="blue"  type="password" v-model="password" :rules="passwordRules"></v-text-field>
                      <v-row>
                        <v-col cols="12" sm="7">
                          <v-checkbox label="Remember Me" class="mt-n1" color="blue"></v-checkbox>
                        </v-col>
                        <v-col cols="12" sm="5">
                          <span class="caption blue--text">Forget password</span>
                        </v-col>
                      </v-row>
                      <v-btn color="blue" dark block title type="submit">Login in</v-btn>
                      <router-link to="/Navbar">Go to another page</router-link>
                      <!-- <a class="text-center grey--text mt-4 mb-3">Or Log in using</h5> -->
                      <div class="d-flex justify-space-between align-center mx-10 mb-16">
                        <v-btn depressed outlined color="#CFD8DC">
                          <v-icon color="red" class="fab fa-google"></v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="#CFD8DC">
                          <v-icon color="blue" class="fab fa-facebook-f"></v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="#CFD8DC">
                          <v-icon color="light-blue lighten-3" class="fab fa-twitter"></v-icon>
                        </v-btn>

                      </div>
                    </v-col>

                  </v-row>
                </v-card-text>
              </v-col>
              <v-col cols="12" sm="6" class="rounded-bl-xl" v-bind:style="{backgroundColor: '#2979FF'}" >
                <div style="text-align: center; padding: 180px 0;">
                <v-card-text class="white--text">
                  <h3 class="text-center">D'ont have an Account Yet?</h3>
                  <h6 class="text-center">Let's get you all set up do you can start creating your first <br>
                  onboarding experience
                </h6>
                </v-card-text>
                <div class="text-center">
                  <v-btn tile outlined dark @click="step++">Sign Up</v-btn>
                </div>
              </div>
              </v-col>
            </v-row>
          </v-window-item>
          <v-window-item :value="2">
            <v-row>
              <v-col cols="12" sm="6" class="rounded-br-xl" v-bind:style="{backgroundColor: '#2979FF'}">
                <div style="text-align: center; padding: 180px 0;">
                <v-card-text class="white--text">
                  <h3 class="text-center">Already Signad up?</h3>
                  <h6>SignLog in to your account so you can continue building and<br>
                  edting your onboarding flows </h6>
                </v-card-text>
                <div class="text-center">
                  <v-btn tile outlined dark @click="step--">Login in</v-btn>
                </div>
              </div>
              </v-col>
              <v-col cols="12" sm="6" >
                <v-card-text class="mt-12">
                  <h4 class="text-center">Sign up for an Account</h4>
                  <h6 class="text-center grey--text">
                  Let's get you all set up so you can start creation your <br>
                  first onboarding experience
                </h6>
                <v-row align="center" justify="center">
                  <v-col cols="12" sm="8">
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field label="First Name" outlined dense color="blue" autocomplete="false" class="mt-4"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field label="Last Name" outlined dense color="blue" autocomplete="false" class="mt-4"></v-text-field>
                      </v-col>
                    </v-row>
                    <v-text-field label="Email" outlined dense color="blue" autocomplete="false"></v-text-field>
                    <v-text-field label="Password" outlined dense color="blue" type="password"></v-text-field>
                    <v-row>
                      <v-col cols="12" sm="7">
                        <v-checkbox label="I Accept AAE" class="mt-n1" color="blue"></v-checkbox>
                      </v-col>
                      <v-col cols="12" sm="5">
                        <span class="caption ml-m4">Terms & Conditions</span>
                      </v-col>
                    </v-row>
                    <v-btn color="blue" dark block rile>Sign up</v-btn>
                    <h5 class="text-center grey--text mt-4 mb-3">Or Sign up using</h5>
                    <div class="d-flex justify-space-between align-center mx-10 mb-11">
                      <v-btn depressed outlined color="#CFD8DC">
                        <v-icon color="red" class="fab fa-google"></v-icon>
                      </v-btn>
                      <v-btn depressed outlined color="#CFD8DC">
                        <v-icon color="blue" class="fab fa-facebook-f"></v-icon>
                      </v-btn>
                      <v-btn depressed outlined color="#CFD8DC">
                        <v-icon color="light-blue lighten-3" class="fab fa-twitter"></v-icon>
                      </v-btn>
                    </div>


                  </v-col>
                </v-row>
                </v-card-text>
              </v-col>

            </v-row>
          </v-window-item>
        </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>

export default {
  name: 'login',
  data: () => ({
    step: 1,
    loading: false,
    password: '',
passwordRules: [
  v => !!v || 'Password is required',
  v => (v && v.length > 5) || 'Password must be 6 characteres or more !',
],
email: '',
      emailRules: [
        v => !!v || 'Email   is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid',
      ],
  }),
  methods: {
    
    handleSubmit(){
    this.$refs.form.validate()
  console.log(this.email)    
    }

  },
  
  
  propos: {
    source: String
  // },
  // methods: {
  //   handleSubmit(e){
  //     e.preventDefault()
  //     console.log('mrigel');
  //   }
  }
}
</script>
<style scoped>
.v-appication .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-appication .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>
