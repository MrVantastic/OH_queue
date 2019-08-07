Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'home#index'

  get 'signup' => 'students#new'
  resources :students

  namespace :api do
    namespace :v1 do
      resources :fruits, only: %i[index create destroy update]
    end
  end

  namespace :api do
    namespace :v1 do
      resources :students, only: %i[index create destroy update]
    end
  end

  namespace :api do
    namespace :v1 do
      resources :student_accounts, only: %i[index create destroy update]
    end
  end
end
