Rails.application.routes.draw do
  get 'project/show'
  root :to => "project#show"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
