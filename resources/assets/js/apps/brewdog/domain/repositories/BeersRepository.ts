import Beer from '../../domain/models/Beer'

export default interface BeersRepository {
    all(): Promise<Beer[]>
    update(id: number, data: Partial<Beer>): void
}
