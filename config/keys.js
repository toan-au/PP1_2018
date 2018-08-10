// keys will be kept in this file. dependign on ENV 
// will either export production or dev keys 

if (process.env.ENV === 'production') {
  export default require('./prod');
} else {
  export default require('./dev');
}