Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'site#index'

  #namespace :filezz1 do
  #  resources :files, only: [:loadfiles]
  #end

  get 'loadfiles', to: 'fileszz1/files#loadfiles'

end
