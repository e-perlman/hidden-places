class CreateCampsites < ActiveRecord::Migration[6.1]
  def change
    create_table :campsites do |t|
      t.string :name
      t.decimal :latitude, precision: 10, scale: 6
      t.decimal :longitude, precision: 10, scale: 6
      t.integer :user_id
      t.integer :state_id
      t.string :access_type
      t.string :land_type
      t.integer :safety
      t.integer :quietness
      t.integer :privacy
      t.integer :scenery
      t.integer :accessibility
      t.timestamps
    end
  end
end
