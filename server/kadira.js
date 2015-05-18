var env = process.env.NODE_ENV;
if (typeof(env) !== 'undefined') {
  console.log(env);
  if(env != "development") {
  	Kadira.connect('T6eF2gyT3D3j662NC', 'd664c64b-19fa-446f-ac12-ba428dd62575');
  }
}


