define(['ko'], function(ko){
	return function Usuario(data){
		this.Id_Usuario = ko.observable(data.Id_Usuario);
		this.NombreUsuario = ko.observable(data.NombreUsuario);
	} 
});