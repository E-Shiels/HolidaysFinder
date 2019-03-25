Rails.application.routes.draw do

  namespace :api do

    namespace :v1 do

      resources :holidays
      get 'data_testing', action: "data_testing", controller: "holidays"

    end

  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
