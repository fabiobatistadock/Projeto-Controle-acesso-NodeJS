module.exports = (application) => {
    application.get('/formulario_inclusao_noticia', (req, res) => {
        res.render('admin/form_add_noticia')
    })

    application.post('/noticias/salvar', (req,res) => {
        var noticia = req.body

        req.assert('titulo','Título é obrigatório').notEmpty()
        req.assert('resumo','Resumo é obrigatório').notEmpty()
        req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100)
        req.assert('autor','Autor é obrigatório').notEmpty()
        
        req.assert('data_noticia','Data é obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'})

        var erros = req.validationErrors()

        console.log(erros)

        if(erros){
            res.render('admin/form_add_noticia', {validacao : erros})
            return
        }

        /*function isValidDate(value) {
            if (!value.match(/^\d{4}-\d{2}-\d{2}$/))
                return false
            
            const date = new Date(value)
            if (!date.getTime())
                return false
            return date.toISOString().slice(0, 10) === value
        }
            
        req.assert('data_noticia').custom(isValidDate).withMessage('A data é inválida')*/
        
		var connection = application.config.dbConnection()
		var noticiasModel = application.app.models.noticiasModel


		noticiasModel.salvarNoticia(noticia, connection, (error, result) => {
			//res.send(noticia)
			res.redirect('/noticias')
		})
    });
}