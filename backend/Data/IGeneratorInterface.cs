using System.Collections.Generic;

public interface IDataGenerator<T> where T : class
{
    List<T> Collection();

    List<T> Collection(int length);

    T Instance();
}