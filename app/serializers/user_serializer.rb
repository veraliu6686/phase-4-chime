class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :avatar, :email, :password_digest
  has_many :posts
  has_many :comments

end
