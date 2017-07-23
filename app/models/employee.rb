class Employee < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :subordinates, class_name: "Employee",
                          foreign_key: "supervisor_id"
  belongs_to :supervisor, class_name: "Employee"
  has_many :requests
end

