class Api::V1::HolidaysController < ApplicationController
  before_action :set_holiday, only: [:show, :update, :destroy]

  # GET /holidays
  # GET /holidays.json
  def index
    #Holiday.select{ |holiday| holiday.locations.include?("QC") || holiday.locations.include?("NB")}
    @holidays = Holiday.all
    render json: @holidays
  end

  # PATCH/PUT /holidays/1
  # PATCH/PUT /holidays/1.json
  def update
    #raise params.inspect
    if @holiday.update_attribute(:favorite, params)
      raise params.inspect
       render json: @holiday, status: :ok
     else
       render json: @holiday.errors, status: :unprocessable_entity
     end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_holiday
      @holiday = Holiday.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def holiday_params
      params.require(:holiday).permit(:name, :description, :date, :type, :locations, :states, :favorite)
    end
end
