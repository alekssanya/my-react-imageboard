const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const Board = sequelize.define('Board', {
    name: { type: DataTypes.STRING, primaryKey: true, allowNull: false, unique: true },
})

const Thread = sequelize.define('Thread', {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    boardName: {
        type: DataTypes.STRING,
        references: {
            model: Board,
            key: 'name'
        },
        allowNull: false,
    }
})

const Post = sequelize.define('Post', {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true, },
    userName: { type: DataTypes.STRING, defaultValue: 'Аноним' },
    text: { type: DataTypes.TEXT, allowNull: false },
    subtext: { type: DataTypes.TEXT },
    postTitle: { type: DataTypes.STRING, defaultValue: 'Заголовок' },
    answers: {
        type: DataTypes.ARRAY(DataTypes.JSON({
            id: DataTypes.STRING,
            thread: DataTypes.STRING,
            board: DataTypes.STRING
        }
        )), defaultValue: []
    },
    mediaFiles: { type: DataTypes.ARRAY(DataTypes.TEXT) },
    IP: { type: DataTypes.STRING, allowNull: false },
    boardName: {
        type: DataTypes.STRING,
        references: {
            model: Board,
            key: 'name'
        },
        allowNull: false,
    },
    ThreadId: {
        type: DataTypes.INTEGER,
        references: {
            model: Thread,
            key: 'id'
        },
        allowNull: false,
    },
})

const FilesCounter = sequelize.define('FilesCounter', {
    name: { type: DataTypes.BIGINT, primaryKey: true, primaryKey: true, autoIncrement: true, unique: true },
})


/*
const BannedUser = sequelize.define('thread', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncremen: true },
    IP: { type: DataTypes.STRING, allowNull: false },
    unbanned: { type: DataTypes.STRING, allowNull: false }
})
*/


module.exports = {
    Post, Thread, Board, FilesCounter
}