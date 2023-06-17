function index(req,res){
    req.getConnection((err,conn)=>{
        conn.query('select * from empleados', (err,employees)=>{
            if(err){
                res.json(err);
            }
            res.render('employees/index',{ employees });
        });
    });

}

function create(req,res){
    res.render('employees/create');
}

function store(req,res){
    const data = req.body;
    console.log(req.body);
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO empleados SET ?', [data], (err,rows)=>{
            res.redirect('/employees');
        });
    });

}

function destroy(req,res){
    const rut = req.body.rut;
    
    req.getConnection((err,conn)=>{
        conn.query('delete from empleados where rut = ?',[rut], (err,cols)=>{
            res.redirect('/employees');
        });
    })

    
    
   

}

function edit(req,res){
    const rut = req.params.rut;

    console.log(rut);
    req.getConnection((err,conn)=>{
        conn.query('select * from empleados where rut = ?',[rut], (err,employees)=>{
            if(err){
                res.json(err);
            }
            res.render('employees/edit',{ employees });
        });
    });


}

function update(req,res){
    const rut = req.params.rut;
    const data = req.body;
    req.getConnection((err,conn)=>{
        conn.query('update empleados set ? where rut = ?',[data, rut], (err,cols)=>{
            res.redirect('/employees');
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