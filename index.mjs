import express from 'express';
import clipboardy from 'clipboardy';
import cors from 'cors'
const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
// Define your APIs
app.get('/1', (req, res) => {
  // Fetch data from the command line interface
  const data = `import tensorflow as tf
  import numpy as np
  from sklearn.datasets import load_iris
  from sklearn.model_selection import train_test_split
  from sklearn.preprocessing import LabelBinarizer
  # Load Iris dataset
  iris = load_iris() # Loading Iris dataset into a variable.
  X = iris.data # Features of the dataset.
  y = iris.target # Class labels of the dataset.
  # One-hot encode labels
  lb = LabelBinarizer() # Creating an instance of LabelBinarizer class for one-hot encoding.
  y = lb.fit_transform(y) # One-hot encoding the class labels.
  # Split data into train and test sets
  X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2,random_state=42)
  # Splitting the dataset into training and testing sets with test size of 20%.
  # Define model architecture
  model = tf.keras.Sequential([
          # First hidden layer with 16 neurons and input shape of 4 features. ReLU activation function is used.
          tf.keras.layers.Dense(16, input_shape=(4,), activation='relu'), 
          # Second hidden layer with 8 neurons. ReLU activation function is used.
          tf.keras.layers.Dense(8, activation='relu'), 
          # Output layer with 3 neurons for 3 classes. Softmax activation function is used for multiclass␣classification task.
          tf.keras.layers.Dense(3, activation='softmax') 
          ])
  # Compile model with different optimizers
  optimizers = ['sgd', 'adam', 'rmsprop'] # List of optimizers to be used for training the model.
  for optimizer in optimizers: # Looping over each optimizer.
      # Compiling the model with 'categorical_crossentropy' as the loss function,the current optimizer and accuracy as the metric to be calculated.
      model.compile(loss='categorical_crossentropy', optimizer=optimizer,metrics=['accuracy'])
      # Train model
      history = model.fit(X_train, y_train, validation_data=(X_test, y_test),epochs=50, verbose=0) 
      # Training the model for 50 epochs with verbose=0 to suppress the output.
      
      # Evaluate model
      loss, accuracy = model.evaluate(X_test, y_test, verbose=0) # Evaluating the model on the test set and calculating the loss and accuracy.
      print('Optimizer:', optimizer) # Printing the optimizer name.
      print('Test loss:', loss) # Printing the loss value on the test set.
      print('Test accuracy:', accuracy) # Printing the accuracy value on the test set.`;

  // Copy response to clipboard
  clipboardy.writeSync(data);

  // Close the client's window/tab using JavaScript
  const closeWindowScript = ``;
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write(closeWindowScript);
  res.end();
});

app.get('/2', (req, res) => {
  // Fetch data from the command line interface
  const data = 'Data for API 2';

  // Copy response to clipboard
  clipboardy.writeSync(data);

  // Close the client's window/tab using JavaScript
  res.end('exit');
});

// Repeat the above pattern for the remaining APIs (3, 4, and 5)

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});