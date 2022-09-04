<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4 v-if="user">Anda login sebagai : {{ user }}</h4>

    
    <br>
    <div id="logout" v-if="isSignedIn">
      <button @click="handleSignOut" id="btn">logout</button>
    </div>
    <br>
    <br>
    <br>
    <div id="GoogleSignIn" v-if="!isSignedIn">
      <button @click="handleSignInGoogle" id="btn">Login dengan google</button>
    </div>
    <br>
        <div id="FacebookSignIn" v-if="!isSignedIn">
      <button @click="handleSignInFacebook" id="btn-fb">Login dengan Facebook</button>
    </div>
    <br>
    <div id="GithubSignIn" v-if="!isSignedIn">
      <button @click="handleSignInGithub" id="btn-git">Login dengan Github</button>
    </div>
  </div>
</template>

<script>
import firebaseConfig from '../firebaseConfig';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";
firebaseConfig
const provider = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();
const providerGithub = new GithubAuthProvider();

const auth = getAuth();
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      user: '',
      isSignedIn: false,
    }
  },
  methods: {
    handleSignInGoogle() {
      signInWithPopup(auth, provider)
        .then((result) => {          
          this.user = result.user.displayName;
          this.isSignedIn = true;
        }).catch((error) => {
          console.log(error);
        });
    },
    handleSignInFacebook() {
      signInWithPopup(auth, providerFacebook)
        .then((result) => {          
          this.user = result.user.displayName;
          this.isSignedIn = true;
        }).catch((error) => {
          console.log(error);
        });
    },
    handleSignInGithub() {
      signInWithPopup(auth, providerGithub)
        .then((result) => {          
          this.user = result.user.displayName;
          this.isSignedIn = true;
        }).catch((error) => {
          console.log(error);
        });
    },
    handleSignOut() {
      signOut(auth).then(() => {
          this.user = '';
          this.isSignedIn = false;
        }).catch((error) => {
          console.log(error);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#btn{
border: 1px transparent solid;
width: 250px;
height: 35px;
border-radius: 3px;
font-size: 16px;
background-color: #42b983;
color: white;
cursor : pointer;
font-weight: bold;
}
#btn:hover{
  background-color: #2bc580;
}
#btn-fb{
  background-color: #3B5998;
  border: 1px transparent solid;
  width: 250px;
  height: 35px;
  border-radius: 3px;
  cursor : pointer;
  font-size: 16px;
  color: white;
  font-weight: bold;
}
#btn-fb:hover{
  background-color: #1a3f8d;
}
#btn-git{
  background-color: black;
  border: 1px transparent solid;
  width: 250px;
  height: 35px;
  cursor : pointer;
  border-radius: 3px;
  font-size: 16px;
  color: white;
  font-weight: bold;
}
#btn-git:hover{
  background-color: rgba(0, 0, 0, 0.589);
}
</style>
