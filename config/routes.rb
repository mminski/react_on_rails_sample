Rails.application.routes.draw do
  devise_for :employees
  #root 
  root 'vacationplanner#index'
  get '*path', to: 'vacationplanner#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
