class EmailsController < ApplicationController

  # POST /emails
  # POST /emails.json
  def create
    @email = Email.new(email_params)

    if @email.save
      render :show, status: :created, location: @email
    else
      render json: @email.errors, status: :unprocessable_entity
    end
  end

    # Never trust parameters from the scary internet, only allow the white list through.
    def email_params
      params.require(:email).permit(:email)
    end
end
