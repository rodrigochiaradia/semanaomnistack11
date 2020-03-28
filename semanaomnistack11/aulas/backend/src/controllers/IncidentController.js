const connection = require('../database/connection');

module.exports = {
    //Lista todos os casos (registros/incidents)
    async index(request,response){
        //ESQUEMA DE PAGINAÇÃO - para exibir apenas cinco registros (e não todos de uma só vez!) por 
        //página quando houver a requisição da lista de todos os casos
        const{ page = 1 } = request.query;
        //Para contar a quantidade total de casos (registros/incidents)
        const [count] = await connection('incidents').count();
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page -1) * 5)
            .select(['incidents.*', 
                'ongs.name', 
                'ongs.email', 
                'ongs.whatsapp', 
                'ongs.city', 
                'ongs.uf'
            ]);
        response.header('X-Total-Count', count['count(*)']);
        return response.json(incidents);
    }, 
    //Cria um registro/caso (incident) no BD, correlacionando-o à respectiva ONG
    async create(request,response){
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });
        return response.json({ id });
    },
    //Apaga um registro de um caso
    async delete(request,response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;
        
        //busca incident no BD
        const incident = await connection('incidents').where('id', id).select('ong_id').first();
        //testa se o incidente é da ONG correta (id que consta no cabeçalho do chamado HTTP) 
        if (incident.ong_id !== ong_id){
            return response.status(401).json({error: 'Operation not permitted'});
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};