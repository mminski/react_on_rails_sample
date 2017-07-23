# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#   o
#
# #
3.times do |i|
e = Employee.new
  e.email = "supervisor@vacationplaner#{i}.de"
  e.encrypted_password = "12345"
  e.password = '1q2w3e3e4r'
  e.name = "Supervisor #{i}"
  # e.supervisor = Employee.new
  e.save!
end 

20.times do |i|
    e = Employee.new
    e.email = "test@example#{i}.de"
    e.encrypted_password = '1234'
    e.password = '1q2w3e'
    e.name = "Subordinate #{i}"
    e.supervisor_id = Employee.all.first.id
    e.avd = 20
    e.tvd = 10
    e.save!
end


20.times do |i|
  ran = Random.new.rand(20)
  r = Request.new
  r.status = "0"
  r.start_date = Date.new(2017, 11, 10) 
  r.end_date = Date.new(2017, 11, 12)
  r.employee_id = ran
  r.save!
end
# 5.times do |i|
#     e = Employee.new
#     e.email = "super@example#{i}.de"
#     e.encrypted_password = '1234'
#     e.password = '1q2w3e'
#     e.name = "Michael Master #{i}"
#     e.avd = 30
#     e.tvd = 5
#     e.save! 
# end
