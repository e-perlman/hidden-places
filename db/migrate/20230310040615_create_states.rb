class CreateStates < ActiveRecord::Migration[6.1]
  def change
    create_table :states do |t|
      t.string :name 
      t.string :climate
      t.string :known_for
      t.string :state_pic
      t.timestamps
    end
  end
end
