const { 
    addNoteHandler, 
    getAllNotesHandler, 
    getNoteByIdHandler, 
    editNoteByHandler,
    deleteNoteByIdHandler, 
} = require("./handler");

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    }, 
    {   //? untuk fitur edit catatan
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByHandler,
    },
    {
        //? untuk fitur hapus catatan
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    },
];

module.exports = routes;