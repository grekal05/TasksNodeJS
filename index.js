const express = require('express')
const app = express() 
const { Sequelize, DataTypes } = require('sequelize');
const Tasks = require('./models/task')
//conexão de banco de dados Sqlite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database-task.db'
  });

const tasks= Tasks(sequelize, DataTypes)

app.set('view engine','ejs')
app.use(express.json())

// List tasks
app.get('/tasks',async(req,res) =>{

const allTasks = await tasks.findAll()
//allTasks = await sequelize.query('SELECT * FROM Tasks')
    res.json({action: tasks.id, name: tasks.name})
})

//Show tasks

app.get('/tasks/:id', async (req,res) =>{
    const taskId = req.params.id
    const task = await tasks.findByPk(taskId)
    //res.render('tarefa',{id: task.id, name: task.name})
    res.json({action:task.id, name: task.name})
})

// Create task
app.post('/tasks', async(req, res) => {
    const taskId = req.params.id
    const body = req.body
    const Createtasks = await tasks.create({ id: req.body.id,  name: req.body.name})
    res.json({ action:'Createtasks', Createtasks})

  })

// Update task

app.put('/tasks/:id', (req, res) => {
    const body = req.body
    task.update({ id: body.id,
        name: body.name
    });        
    res.send({ action:'Task update', updatetask:updatetask })
  })

  // Delete task
  app.delete('/tasks/:id', async (req, res) => {
    const taskId = req.params.id
    const task = await tasks.destroy(taskId)
    if (task) {
      await task.destroy()
    }
    res.send({ action: 'Deleting task', taskId: taskId })
  })

app.listen(3000,() =>{
    console.log('inciando o servidor express')
})