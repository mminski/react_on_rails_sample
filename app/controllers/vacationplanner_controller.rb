class VacationplannerController < ApplicationController
  layout "hello_world"
  before_filter :authenticate_employee!

  def index
    @employees ||= Employee.all 
    @supervisors ||= Employee.all.where(supervisor_id: nil)
    @subordinates ||= Employee.all.where.not(supervisor_id: nil)
    @current_user = current_employee
    
    @my_requests = Request.all.where(employee_id: @current_user.id)
    
    puts @my_requests


    #supervisor
    if current_employee.supervisor_id.nil?
    @my_employees ||= current_employee.subordinates
    puts current_employee.name
    puts current_employee.subordinates
    end

    @my_employees_requests = []
    @my_employees.each {|sub| sub.requests.each {|req| @my_employees_requests << req}}
    # @my_employees_requests = Request.all
    puts @my_employees_requests
  end
  

  #api
  def update_request
    puts params[:status]
    puts params[:request_id]
  end  




end
