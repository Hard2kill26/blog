import Task from "../models/Task";

export const renderTasks = async (req, res) => {
    const tasks = await Task.find().lean(); // lean permite recorrer el arreglo como un objeto tipico de javascript
    res.render("index", { tasks: tasks });
  }


  export const createTasks = async (req, res) => {
    try {
      const task = Task(req.body);
      await task.save();
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  }

  export const renderAbout = (req, res) => {
    res.render("about");
  }

  export const renderEdit = async (req, res) => {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task: task });
  }

  export const editTasks = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndUpdate(id, req.body);
    res.redirect("/");
  }

  export const deleteTasks = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect("/");
  }

  export const toggleTasks = async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    console.log(task);
    task.done = !task.done; // logra cambiar a true o false
  
    await task.save();
    //res.send("toggle"); //Para saber que está respondiendo
  
    res.redirect("/");
  }