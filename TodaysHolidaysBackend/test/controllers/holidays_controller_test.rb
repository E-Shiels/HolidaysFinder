require 'test_helper'

class HolidaysControllerTest < ActionDispatch::IntegrationTest
  setup do
    @holiday = holidays(:one)
  end

  test "should get index" do
    get holidays_url, as: :json
    assert_response :success
  end

  test "should create holiday" do
    assert_difference('Holiday.count') do
      post holidays_url, params: { holiday: { date: @holiday.date, description: @holiday.description, locations: @holiday.locations, name: @holiday.name, states: @holiday.states, type: @holiday.type } }, as: :json
    end

    assert_response 201
  end

  test "should show holiday" do
    get holiday_url(@holiday), as: :json
    assert_response :success
  end

  test "should update holiday" do
    patch holiday_url(@holiday), params: { holiday: { date: @holiday.date, description: @holiday.description, locations: @holiday.locations, name: @holiday.name, states: @holiday.states, type: @holiday.type } }, as: :json
    assert_response 200
  end

  test "should destroy holiday" do
    assert_difference('Holiday.count', -1) do
      delete holiday_url(@holiday), as: :json
    end

    assert_response 204
  end
end
