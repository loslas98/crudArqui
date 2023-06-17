function index(req,res){
    req.getConnection((err,conn)=>{
        conn.query('select * from maquinas', (err,machines)=>{
            if(err){
                res.json(err);
            }
            res.render('machines/index',{ machines });
        });
    });

}

function create(req,res){
    res.render('machines/create');
}

function store(req,res){
    const data = req.body;
    console.log(req.body);
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO maquinas SET ?', [data], (err,rows)=>{
            res.redirect('/machines');
        });
    });

}

function destroy(req,res){
    const id = req.body.id;
    
    req.getConnection((err,conn)=>{
        conn.query('delete from maquinas where id = ?',[id], (err,cols)=>{
            res.redirect('/machines');
        });
    })

    
    
   

}

function edit(req,res){
    const id = req.params.id;

    console.log(rut);
    req.getConnection((err,conn)=>{
        conn.query('select * from maquinas where id = ?',[id], (err,maquinas)=>{
            if(err){
                res.json(err);
            }
            res.render('machines/edit',{ maquinas });
        });
    });


}

function update(req,res){
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err,conn)=>{
        conn.query('update maquinas set ? where id = ?',[data, id], (err,cols)=>{
            res.redirect('/machines');
        });
    })


}

module.exports = {
    index: index,
    create: create,
    store: store,
    destroy: destroy,
    edit: edit,
    update: update

}