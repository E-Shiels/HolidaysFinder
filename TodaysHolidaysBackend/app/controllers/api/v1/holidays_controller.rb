class Api::V1::HolidaysController < ApplicationController
  before_action :set_holiday, only: [:show, :update, :destroy]

  # GET /holidays
  # GET /holidays.json
  def index
    @holidays = Holiday.all
    render json: @holidays
  end

  # GET /holidays/1
  # GET /holidays/1.json
  def show
  end

  # # POST /holidays
  # # POST /holidays.json
  # def create
  #   @holiday = Holiday.new(holiday_params)
  #
  #   if @holiday.save
  #     render :show, status: :created, location: @holiday
  #   else
  #     render json: @holiday.errors, status: :unprocessable_entity
  #   end
  # end

  # PATCH/PUT /holidays/1
  # PATCH/PUT /holidays/1.json
  def update
    if @holiday.update(holiday_params)
      render :show, status: :ok, location: @holiday
    else
      render json: @holiday.errors, status: :unprocessable_entity
    end
  end

  # # DELETE /holidays/1
  # # DELETE /holidays/1.json
  # def destroy
  #   @holiday.destroy
  # end

  def data_testing
    #include "json"
    rake db:seed
    # File.open('C:\Users\erics\Documents\Coding and Programming\TodaysHolidays\TodaysHolidays Git\TodaysHolidays\TodaysHolidaysBackend\app\controllers\api\v1\data.json') do |f|
    # data = JSON.parse(f.read)
    # raise params.inspect
    # end
    #File.close('C:\Users\erics\Documents\Coding and Programming\TodaysHolidays\TodaysHolidays Git\TodaysHolidays\TodaysHolidaysBackend\app\controllers\api\v1\data.json')
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_holiday
      @holiday = Holiday.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def holiday_params
      params.require(:holiday).permit(:name, :description, :date, :type, :locations, :states)
    end
end
