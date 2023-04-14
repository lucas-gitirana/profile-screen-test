$('#form-contato').submit(function(e){   
    e.preventDefault();
    var nome = $('#nome');
    var localizacao = $('#localizacao');
    var idade = $('#idade');
    var bios = $('#bios');    
    var erro = $('.alert');    
    var sucesso = $('#sucesso');
    var campo = $('#campo-erro');    

    // remove o alerta sempre que submeter
    erro.addClass('d-none');  
    sucesso.addClass('d-none');   
    $('.is-invalid').removeClass('is-invalid');

    // validação do campo nome
    if(nome.val() == ''){
        erro.removeClass('d-none');
        sucesso.addClass('d-none');
        campo.html('nome'); // campo não preenchido
        nome.focus(); // posiciona o cursor
        nome.addClass('is-invalid');
        return false;
    }

    // validação do campo localizacao
    if(localizacao.val() == ''){
        erro.removeClass('d-none');
        sucesso.addClass('d-none');
        campo.html('localização'); // campo não preenchido
        localizacao.focus(); // posiciona o cursor
        localizacao.addClass('is-invalid');
        return false;
    }

    // validação do campo idade
    if(idade.val() == ''){
        erro.removeClass('d-none');
        sucesso.addClass('d-none');
        campo.html('idade'); // campo não preenchido
        idade.focus(); // posiciona o cursor
        idade.addClass('is-invalid');
        return false;
    }

    // validação do campo biografia
    if(bios.val() == ''){
        erro.removeClass('d-none');
        sucesso.addClass('d-none');
        campo.html('biografia'); // campo não preenchido
        bios.focus(); // posiciona o cursor
        bios.addClass('is-invalid');
        return false;
    }
    
    // teste       
    atualizar(nome.val(), localizacao.val(), idade.val(), bios.val());
    sucesso.removeClass('d-none');          
    return true;    
});

function atualizar(nome, localizacao, idade, biografia){    
    var nomePerfil = $('#nome-perfil');
    var localizacaoPerfil = $('#localizacao-perfil');
    var idadePerfil = $('#idade-perfil');     
    var biosPerfil = $('#bios-perfil');
    
    nomePerfil.html(nome);
    localizacaoPerfil.html(localizacao);
    idadePerfil.html(idade+' anos');
    biosPerfil.html(biografia);
}