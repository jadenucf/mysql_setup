import { DataTypes } from 'sequelize';

const post = (sequelize) => {
  const Post = sequelize.define(
    'posts',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      postId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      comments: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Post;
};

export default post;
